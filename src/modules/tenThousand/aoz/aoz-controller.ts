import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aoz")
export default class AozController {
  @operation({
    summary: "Get Aoz",
  })
  @get()
  static getAoz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aoz",
  })
  @post("{id}")
  static createAoz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

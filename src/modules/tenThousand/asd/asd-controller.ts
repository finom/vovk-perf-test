import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("asd")
export default class AsdController {
  @operation({
    summary: "Get Asd",
  })
  @get()
  static getAsd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Asd",
  })
  @post("{id}")
  static createAsd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

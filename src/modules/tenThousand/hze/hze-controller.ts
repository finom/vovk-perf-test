import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hze")
export default class HzeController {
  @operation({
    summary: "Get Hze",
  })
  @get()
  static getHze = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hze",
  })
  @post("{id}")
  static createHze = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

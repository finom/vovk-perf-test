import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("edw")
export default class EdwController {
  @operation({
    summary: "Get Edw",
  })
  @get()
  static getEdw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Edw",
  })
  @post("{id}")
  static createEdw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

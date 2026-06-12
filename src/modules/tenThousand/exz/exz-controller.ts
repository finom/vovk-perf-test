import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("exz")
export default class ExzController {
  @operation({
    summary: "Get Exz",
  })
  @get()
  static getExz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Exz",
  })
  @post("{id}")
  static createExz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

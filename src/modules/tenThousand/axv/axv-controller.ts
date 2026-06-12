import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("axv")
export default class AxvController {
  @operation({
    summary: "Get Axv",
  })
  @get()
  static getAxv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Axv",
  })
  @post("{id}")
  static createAxv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

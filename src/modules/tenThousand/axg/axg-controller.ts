import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("axg")
export default class AxgController {
  @operation({
    summary: "Get Axg",
  })
  @get()
  static getAxg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Axg",
  })
  @post("{id}")
  static createAxg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

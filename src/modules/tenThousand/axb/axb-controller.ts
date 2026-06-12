import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("axb")
export default class AxbController {
  @operation({
    summary: "Get Axb",
  })
  @get()
  static getAxb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Axb",
  })
  @post("{id}")
  static createAxb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("axn")
export default class AxnController {
  @operation({
    summary: "Get Axn",
  })
  @get()
  static getAxn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Axn",
  })
  @post("{id}")
  static createAxn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

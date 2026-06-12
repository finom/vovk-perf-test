import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gxn")
export default class GxnController {
  @operation({
    summary: "Get Gxn",
  })
  @get()
  static getGxn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gxn",
  })
  @post("{id}")
  static createGxn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

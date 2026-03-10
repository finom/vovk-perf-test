import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fuy")
export default class FuyController {
  @operation({
    summary: "Get Fuy",
  })
  @get()
  static getFuy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fuy",
  })
  @post("{id}")
  static createFuy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

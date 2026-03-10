import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lmo")
export default class LmoController {
  @operation({
    summary: "Get Lmo",
  })
  @get()
  static getLmo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lmo",
  })
  @post("{id}")
  static createLmo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("icb")
export default class IcbController {
  @operation({
    summary: "Get Icb",
  })
  @get()
  static getIcb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Icb",
  })
  @post("{id}")
  static createIcb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

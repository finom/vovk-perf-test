import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("icx")
export default class IcxController {
  @operation({
    summary: "Get Icx",
  })
  @get()
  static getIcx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Icx",
  })
  @post("{id}")
  static createIcx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

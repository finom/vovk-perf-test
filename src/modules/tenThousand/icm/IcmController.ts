import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("icm")
export default class IcmController {
  @operation({
    summary: "Get Icm",
  })
  @get()
  static getIcm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Icm",
  })
  @post("{id}")
  static createIcm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

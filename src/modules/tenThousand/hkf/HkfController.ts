import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hkf")
export default class HkfController {
  @operation({
    summary: "Get Hkf",
  })
  @get()
  static getHkf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hkf",
  })
  @post("{id}")
  static createHkf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

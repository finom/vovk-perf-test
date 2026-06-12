import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kz")
export default class KzController {
  @operation({
    summary: "Get Kz",
  })
  @get()
  static getKz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kz",
  })
  @post("{id}")
  static createKz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kpz")
export default class KpzController {
  @operation({
    summary: "Get Kpz",
  })
  @get()
  static getKpz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kpz",
  })
  @post("{id}")
  static createKpz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

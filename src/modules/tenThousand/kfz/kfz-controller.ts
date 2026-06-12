import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kfz")
export default class KfzController {
  @operation({
    summary: "Get Kfz",
  })
  @get()
  static getKfz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kfz",
  })
  @post("{id}")
  static createKfz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

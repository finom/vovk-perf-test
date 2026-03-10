import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kf")
export default class KfController {
  @operation({
    summary: "Get Kf",
  })
  @get()
  static getKf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kf",
  })
  @post("{id}")
  static createKf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

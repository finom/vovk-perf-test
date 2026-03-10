import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kuy")
export default class KuyController {
  @operation({
    summary: "Get Kuy",
  })
  @get()
  static getKuy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kuy",
  })
  @post("{id}")
  static createKuy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

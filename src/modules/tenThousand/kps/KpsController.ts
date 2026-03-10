import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kps")
export default class KpsController {
  @operation({
    summary: "Get Kps",
  })
  @get()
  static getKps = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kps",
  })
  @post("{id}")
  static createKps = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kpb")
export default class KpbController {
  @operation({
    summary: "Get Kpb",
  })
  @get()
  static getKpb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kpb",
  })
  @post("{id}")
  static createKpb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

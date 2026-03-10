import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dmu")
export default class DmuController {
  @operation({
    summary: "Get Dmu",
  })
  @get()
  static getDmu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dmu",
  })
  @post("{id}")
  static createDmu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

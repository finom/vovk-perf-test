import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dth")
export default class DthController {
  @operation({
    summary: "Get Dth",
  })
  @get()
  static getDth = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dth",
  })
  @post("{id}")
  static createDth = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("drg")
export default class DrgController {
  @operation({
    summary: "Get Drg",
  })
  @get()
  static getDrg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Drg",
  })
  @post("{id}")
  static createDrg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

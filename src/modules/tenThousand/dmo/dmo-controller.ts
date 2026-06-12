import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dmo")
export default class DmoController {
  @operation({
    summary: "Get Dmo",
  })
  @get()
  static getDmo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dmo",
  })
  @post("{id}")
  static createDmo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

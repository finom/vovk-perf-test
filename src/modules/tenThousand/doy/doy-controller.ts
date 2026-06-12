import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("doy")
export default class DoyController {
  @operation({
    summary: "Get Doy",
  })
  @get()
  static getDoy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Doy",
  })
  @post("{id}")
  static createDoy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

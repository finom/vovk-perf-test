import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dvz")
export default class DvzController {
  @operation({
    summary: "Get Dvz",
  })
  @get()
  static getDvz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dvz",
  })
  @post("{id}")
  static createDvz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

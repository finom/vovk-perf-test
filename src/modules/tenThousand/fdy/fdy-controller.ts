import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fdy")
export default class FdyController {
  @operation({
    summary: "Get Fdy",
  })
  @get()
  static getFdy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fdy",
  })
  @post("{id}")
  static createFdy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

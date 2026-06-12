import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("frw")
export default class FrwController {
  @operation({
    summary: "Get Frw",
  })
  @get()
  static getFrw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Frw",
  })
  @post("{id}")
  static createFrw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

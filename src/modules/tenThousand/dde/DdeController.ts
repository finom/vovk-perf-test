import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dde")
export default class DdeController {
  @operation({
    summary: "Get Dde",
  })
  @get()
  static getDde = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dde",
  })
  @post("{id}")
  static createDde = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

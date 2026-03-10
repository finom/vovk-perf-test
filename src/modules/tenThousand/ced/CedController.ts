import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ced")
export default class CedController {
  @operation({
    summary: "Get Ced",
  })
  @get()
  static getCed = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ced",
  })
  @post("{id}")
  static createCed = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

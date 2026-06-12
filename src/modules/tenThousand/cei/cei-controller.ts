import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cei")
export default class CeiController {
  @operation({
    summary: "Get Cei",
  })
  @get()
  static getCei = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cei",
  })
  @post("{id}")
  static createCei = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

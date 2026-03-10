import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hmo")
export default class HmoController {
  @operation({
    summary: "Get Hmo",
  })
  @get()
  static getHmo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hmo",
  })
  @post("{id}")
  static createHmo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

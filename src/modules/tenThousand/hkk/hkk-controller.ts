import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hkk")
export default class HkkController {
  @operation({
    summary: "Get Hkk",
  })
  @get()
  static getHkk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hkk",
  })
  @post("{id}")
  static createHkk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

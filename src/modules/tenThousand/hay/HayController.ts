import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hay")
export default class HayController {
  @operation({
    summary: "Get Hay",
  })
  @get()
  static getHay = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hay",
  })
  @post("{id}")
  static createHay = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

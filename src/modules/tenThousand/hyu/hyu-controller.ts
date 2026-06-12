import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hyu")
export default class HyuController {
  @operation({
    summary: "Get Hyu",
  })
  @get()
  static getHyu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hyu",
  })
  @post("{id}")
  static createHyu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

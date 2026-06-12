import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hyo")
export default class HyoController {
  @operation({
    summary: "Get Hyo",
  })
  @get()
  static getHyo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hyo",
  })
  @post("{id}")
  static createHyo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

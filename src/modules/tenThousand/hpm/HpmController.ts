import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hpm")
export default class HpmController {
  @operation({
    summary: "Get Hpm",
  })
  @get()
  static getHpm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hpm",
  })
  @post("{id}")
  static createHpm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gyh")
export default class GyhController {
  @operation({
    summary: "Get Gyh",
  })
  @get()
  static getGyh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gyh",
  })
  @post("{id}")
  static createGyh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

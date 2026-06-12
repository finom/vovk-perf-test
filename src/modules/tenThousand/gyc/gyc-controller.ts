import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gyc")
export default class GycController {
  @operation({
    summary: "Get Gyc",
  })
  @get()
  static getGyc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gyc",
  })
  @post("{id}")
  static createGyc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

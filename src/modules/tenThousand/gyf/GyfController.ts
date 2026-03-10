import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gyf")
export default class GyfController {
  @operation({
    summary: "Get Gyf",
  })
  @get()
  static getGyf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gyf",
  })
  @post("{id}")
  static createGyf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

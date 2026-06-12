import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gyy")
export default class GyyController {
  @operation({
    summary: "Get Gyy",
  })
  @get()
  static getGyy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gyy",
  })
  @post("{id}")
  static createGyy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

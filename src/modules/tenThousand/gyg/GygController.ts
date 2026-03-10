import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gyg")
export default class GygController {
  @operation({
    summary: "Get Gyg",
  })
  @get()
  static getGyg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gyg",
  })
  @post("{id}")
  static createGyg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

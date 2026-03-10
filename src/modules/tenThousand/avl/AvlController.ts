import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("avl")
export default class AvlController {
  @operation({
    summary: "Get Avl",
  })
  @get()
  static getAvl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Avl",
  })
  @post("{id}")
  static createAvl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

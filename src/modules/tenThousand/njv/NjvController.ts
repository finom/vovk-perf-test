import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("njv")
export default class NjvController {
  @operation({
    summary: "Get Njv",
  })
  @get()
  static getNjv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Njv",
  })
  @post("{id}")
  static createNjv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

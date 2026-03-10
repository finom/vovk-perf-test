import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("inl")
export default class InlController {
  @operation({
    summary: "Get Inl",
  })
  @get()
  static getInl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Inl",
  })
  @post("{id}")
  static createInl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

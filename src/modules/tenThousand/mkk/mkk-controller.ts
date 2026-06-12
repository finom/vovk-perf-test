import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mkk")
export default class MkkController {
  @operation({
    summary: "Get Mkk",
  })
  @get()
  static getMkk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mkk",
  })
  @post("{id}")
  static createMkk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

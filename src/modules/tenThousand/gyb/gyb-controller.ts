import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gyb")
export default class GybController {
  @operation({
    summary: "Get Gyb",
  })
  @get()
  static getGyb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gyb",
  })
  @post("{id}")
  static createGyb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

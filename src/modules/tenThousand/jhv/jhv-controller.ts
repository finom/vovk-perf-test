import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jhv")
export default class JhvController {
  @operation({
    summary: "Get Jhv",
  })
  @get()
  static getJhv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jhv",
  })
  @post("{id}")
  static createJhv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

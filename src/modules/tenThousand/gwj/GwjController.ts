import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gwj")
export default class GwjController {
  @operation({
    summary: "Get Gwj",
  })
  @get()
  static getGwj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gwj",
  })
  @post("{id}")
  static createGwj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

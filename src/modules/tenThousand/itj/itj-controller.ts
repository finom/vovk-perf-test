import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("itj")
export default class ItjController {
  @operation({
    summary: "Get Itj",
  })
  @get()
  static getItj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Itj",
  })
  @post("{id}")
  static createItj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

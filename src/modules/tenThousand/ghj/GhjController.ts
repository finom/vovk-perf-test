import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ghj")
export default class GhjController {
  @operation({
    summary: "Get Ghj",
  })
  @get()
  static getGhj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ghj",
  })
  @post("{id}")
  static createGhj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("izl")
export default class IzlController {
  @operation({
    summary: "Get Izl",
  })
  @get()
  static getIzl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Izl",
  })
  @post("{id}")
  static createIzl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
